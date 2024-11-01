from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker
from sqlalchemy import create_engine, Column, Integer, String, Float, Date, ForeignKey, text
import mysql.connector

Base = declarative_base()

def create_tables(engine):
    # Users Table
    class User(Base):
        __tablename__ = 'users'
        user_id = Column(Integer, primary_key=True, autoincrement=True)
        username = Column(String(50), unique=True, nullable=False)
        first_name = Column(String(50), nullable=False)
        last_name = Column(String(50), nullable=False)
        date_of_birth = Column(Date, nullable=False)
        gender = Column(String(10), nullable=False)
        email = Column(String(100), unique=True, nullable=False)
        password = Column(String(200), nullable=False)
        contact_number = Column(String(15), nullable=False)
        user_type = Column(String(50), nullable=False)

    # Product Table
    class Product(Base):
        __tablename__ = 'products'
        product_id = Column(Integer, primary_key=True, autoincrement=True)
        product_name = Column(String(100), nullable=False)
        description = Column(String(255), nullable=False)
        price = Column(Float, nullable=False)
        images = Column(String(255), nullable=True)
        category_name = Column(Integer, ForeignKey('categories.category_id'))
        specifications = Column(String(255), nullable=True)
        stock_id = Column(Integer, ForeignKey('stock.stock_id'))

    # Category Table
    class Category(Base):
        __tablename__ = 'categories'
        category_id = Column(Integer, primary_key=True, autoincrement=True)
        category_name = Column(String(100), nullable=False)

    # Stock Table
    class Stock(Base):
        __tablename__ = 'stock'
        stock_id = Column(Integer, primary_key=True, autoincrement=True)
        product_id = Column(Integer, ForeignKey('products.product_id'))
        quantity = Column(Integer, nullable=False)
        price = Column(Float, nullable=False)
        received_date = Column(Date, nullable=False)
        dealer = Column(String(100), nullable=False)

    # Order Table
    class Order(Base):
        __tablename__ = 'orders'
        order_id = Column(Integer, primary_key=True, autoincrement=True)
        product_id = Column(Integer, ForeignKey('products.product_id'))
        user_id = Column(Integer, ForeignKey('users.user_id'))
        quantity = Column(Integer, nullable=False)
        price = Column(Float, nullable=False)
        no_of_items = Column(Integer, nullable=False)
        house_no = Column(String(50), nullable=False)
        street = Column(String(100), nullable=False)
        city = Column(String(50), nullable=False)
        district = Column(String(50), nullable=False)
        country = Column(String(50), nullable=False)
        contact_number = Column(String(15), nullable=False)
        email = Column(String(100), nullable=False)
        postal_code = Column(String(10), nullable=False)

    # Payment Table
    class Payment(Base):
        __tablename__ = 'payments'
        payment_id = Column(Integer, primary_key=True, autoincrement=True)
        payment_method = Column(String(50), nullable=False)
        order_id = Column(Integer, ForeignKey('orders.order_id'))

    # Order Tracking Table
    class OrderTracking(Base):
        __tablename__ = 'order_tracking'
        order_tracking_id = Column(Integer, primary_key=True, autoincrement=True)
        order_id = Column(Integer, ForeignKey('orders.order_id'))
        delivery_status = Column(String(50), nullable=False)

    # Invoice Table
    class Invoice(Base):
        __tablename__ = 'invoices'
        invoice_id = Column(Integer, primary_key=True, autoincrement=True)
        order_id = Column(Integer, ForeignKey('orders.order_id'))
        payment_id = Column(Integer, ForeignKey('payments.payment_id'))
        order_tracking_id = Column(Integer, ForeignKey('order_tracking.order_tracking_id'))

    # Catalog Table
    class Catalog(Base):
        __tablename__ = 'catalog'
        category_id = Column(Integer, primary_key=True, autoincrement=True)
        category_name = Column(String(100), nullable=False)

    # Cart Table
    class Cart(Base):
        __tablename__ = 'cart'
        cart_id = Column(Integer, primary_key=True, autoincrement=True)
        user_id = Column(Integer, ForeignKey('users.user_id'))
        product_id = Column(Integer, ForeignKey('products.product_id'))
        price = Column(Float, nullable=False)
        quantity_selected = Column(Integer, nullable=False)
        total_amount = Column(Float, nullable=False)

    # Creating all tables
    Base.metadata.create_all(engine)

def setup_database():
    # Database engine creation
    engine = create_engine('mysql+mysqlconnector://root:As+s01galaxysa@localhost', echo=True)
    # Connect to MySQL server and create the database if it does not exist
    with engine.connect() as conn:
        conn.execute(text("CREATE DATABASE IF NOT EXISTS ecommerce_db"))
    # Use the newly created database
    engine = create_engine('mysql+mysqlconnector://root:As+s01galaxysa@localhost/ecommerce_db', echo=True)
    create_tables(engine)

if __name__ == "__main__":
    setup_database()
