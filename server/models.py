from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.hybrid import hybrid_property
# from sqlalchemy.sql import func
from config import db, bcrypt

#////////////////////////////////////////////////
class User( db.Model, SerializerMixin):
    __tablename__ ="user_table"

    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.String, nullable=False, unique=True)
    _password_hash = db.Column(db.String, nullable=False)

    closet = db.relationship('Closet', backref='user')
    history = db.relationship('History', backref='user')
    clothes = db.relationship('Clothes', backref='user')

    @hybrid_property
    def password_hash(self):
        return self._password_hash
    
    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8')
        )
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8')
        )

#////////////////////////////////////////////////
class Event( db.Model, SerializerMixin):
    __tablename__ ="event_table"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    tops =  db.Column(db.String, nullable=False)
    bottoms = db.Column(db.String, nullable = False)
    socks = db.Column(db.String, nullable = False)
    shoes = db.Column(db.String, nullable = False)
    accessories = db.Column(db.String, nullable = False)

    history = db.relationship('History', backref='event')

    
#////////////////////////////////////////////////
class Closet( db.Model, SerializerMixin):
    __tablename__ ="closet_table"

    id = db.Column(db.Integer, primary_key=True)
    clothes_id = db.Column(db.Integer, db.ForeignKey("clothes_table.id"))
    user_id = db.Column(db.Integer, db.ForeignKey ("user_table.id"))

    serialize_rules=('-user','-clothes')

#////////////////////////////////////////////////
class Clothes( db.Model, SerializerMixin):
    __tablename__ ="clothes_table"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user_table.id'))
    category = db.Column(db.String)
    season = db.Column(db.String)
    image = db.Column(db.String)

    closet = db.relationship('Closet', backref='clothes')
    history = db.relationship('History', backref='clothes')
    serialize_rules=('-user','-closet', '-history')

#////////////////////////////////////////////////
class History(db.Model, SerializerMixin):
    __tablename__ ="history_table"

    id = db.Column(db.Integer, primary_key=True)
    event_id = db.Column(db.Integer, db.ForeignKey("event_table.id"))
    clothes_id = db.Column(db.Integer, db.ForeignKey("clothes_table.id"))
    user_id = db.Column(db.Integer, db.ForeignKey("user_table.id"))
    date = db.Column(db.Integer)

    serialize_rules=('-user','-clothes', '-event')

#/////////////////////////////////////////////////////////////////////
#Password

   




