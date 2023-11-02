from flask import Flask, make_response, request, session
from flask_restful import Api, Resource
from flask_migrate import Migrate
from models import db, User, Event, Closet, Clothes, History

app = Flask(__name__)
app.secret_key = 'super secret key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json_as_ascii = False

db.init_app(app)
migrate = Migrate(app, db)
api = Api(app)
#////////////////////////////////////////////////////////////////////////////////////////////



#////////////////////////////////////////////////////////////////////////////////////////////
class Login(Resource):
    def post(self):
        data = request.get_json()
        user= data['username']
        password= data['password']
        user = User.query.filter(User.user == user).first()
        if user:
            if user.authenticate(password):
                session['user_id'] = user.id
                return user.to_dict(), 200
            else:
                return {"Error": "password is wrong"}, 401
        return {"Error": "User doesn't exist"}, 401

class CheckSession(Resource):
    def get(self):
        user = User.query.filter(User.id == session.get('user_id')).first()
        if user:
            return user.to_dict(only=('user', 'id'))
        else:
            return {'message': 'Not Authorized'}, 401

class Logout(Resource):
    def delete(self):
        session['user_id'] = None
        return {}, 204

#////////////////////////////////////////////////////////////////////////////////////////////
class User_Route(Resource):
    def get(self):
        users = [user.to_dict() for user in User.query.all()]
        return make_response(users, 200)

    def post(self):
        data = request.get_json()
        # name = data["name"]
        # password = data["password"]
     
        try:
            print(data["name"])
            new_user = User(
                user=data["name"],
                password_hash=data["password"]
            )
            db.session.add(new_user)
            db.session.commit()
            session['user_id'] = new_user.id

            return make_response(new_user.to_dict(), 201)
        except ValueError:
            db.session.rollback()
            return make_response({"errors": ["Validation errors"]}, 400)

class UserByID(Resource):
    def get(self, id):
        user = User.query.filter_by(id=id).first()
        if not user:
            return make_response({"errors": "User not found"}, 404)
        return make_response(user.to_dict(), 200)

    def patch(self, id):
        user = User.query.filter_by(id=id).first()
        if not user:
            return {"message": "User not found"}, 404

        data = request.get_json()
        if 'username' in data:
            user.user = data['username']
        if 'password' in data:
            user._password_hash = data['password']

        db.session.commit()
        return user.to_dict(), 200

    def delete(self, id):
        user = User.query.filter_by(id=id).first()
        if user:
            db.session.delete(user)
            db.session.commit()
            return {"message": "User deleted"}, 204
        return {"message": "User not found"}, 404
    
#////////////////////////////////////////////////////////////////////////////////////////////

class Event(Resource):
    def get(self):
        events = [event.to_dict() for event in Event.query.all()]
        return make_response(events, 200)

    def post(self):
        data = request.get_json()
        try:
            new_event = Event(
                title=data['title']
            )
            db.session.add(new_event)
            db.session.commit()
            return make_response(new_event.to_dict(), 201)
        except ValueError:
            db.session.rollback()
            return make_response({"errors": ["Validation errors"]}, 400)

class EventByID(Resource):
    def get(self, id):
        event = Event.query.filter_by(id=id).first()
        if not event:
            return make_response({"errors": "Event not found"}, 404)
        return make_response(event.to_dict(), 200)

    def patch(self, id):
        event = Event.query.filter_by(id=id).first()
        if not event:
            return {"message": "Event not found"}, 404

        data = request.get_json()
        if 'title' in data:
            event.title = data['title']

        db.session.commit()
        return event.to_dict(), 200

    def delete(self, id):
        event = Event.query.filter_by(id=id).first()
        if event:
            db.session.delete(event)
            db.session.commit()
            return {"message": "Event deleted"}, 204
        return {"message": "Event not found"}, 404

#////////////////////////////////////////////////////////////////////////////////////////////
class Closet(Resource):
    def get(self):
        closets = [closet.to_dict() for closet in Closet.query.all()]
        return make_response(closets, 200)

    def post(self):
        data = request.get_json()
        try:
            new_closet = Closet(
                clothes_id=data['clothes_id'],
                user_id=data['user_id']
            )
            db.session.add(new_closet)
            db.session.commit()
            return make_response(new_closet.to_dict(), 201)
        except ValueError:
            db.session.rollback()
            return make_response({"errors": ["Validation errors"]}, 400)

class ClosetByID(Resource):
    def get(self, id):
        closet = Closet.query.filter_by(id=id).first()
        if not closet:
            return make_response({"errors": "Closet not found"}, 404)
        return make_response(closet.to_dict(), 200)

    def patch(self, id):
        closet = Closet.query.filter_by(id=id).first()
        if closet:
            data = request.get_json()
            closet.clothes_id = data['clothes_id']
            closet.user_id = data['user_id']
            db.session.add(closet)
            db.session.commit()
            return make_response(closet.to_dict(), 200)
        return make_response({'message': 'Closet not found'}, 404)

    def delete(self, id):
        closet = Closet.query.filter_by(id=id).first()
        if closet:
            db.session.delete(closet)
            db.session.commit()
            return make_response({'message': 'Closet deleted'}, 204)
        return make_response({'message': 'Closet not found'}, 404)
    
#////////////////////////////////////////////////////////////////////////////////////////////
class ClothesResource(Resource):
    def get(self):
        clothes = [cloth.to_dict() for cloth in Clothes.query.all()]
        return make_response(clothes, 200)

    def post(self):
        data = request.get_json()
        print(data['picture'])

        try:
            new_clothes = Clothes(
                category=data['category'],
                season=data['season'],
                image=data['picture']
            )
            db.session.add(new_clothes)
            db.session.commit()
            return make_response(new_clothes.to_dict(), 201)
        except ValueError:
            db.session.rollback()
            return make_response({"errors": ["Validation errors"]}, 400)

class ClothesByID(Resource):
    def get(self, id):
        clothes = Clothes.query.filter_by(id=id).first()
        if not clothes:
            return make_response({"errors": "Clothes not found"}, 404)
        return make_response(clothes.to_dict(), 200)

    def patch(self, id):
        clothes = Clothes.query.filter_by(id=id).first()
        if clothes:
            data = request.get_json()
            clothes.clothes_id = data['clothes_id']
            clothes.category = data['category']
            clothes.season = data['season']
            clothes.image = data['image']

            db.session.add(clothes)
            db.session.commit()
            return make_response(clothes.to_dict(), 200)
        return make_response({'message': 'Clothes not found'}, 404)

    def delete(self, id):
        clothes = Clothes.query.filter_by(id=id).first()
        if clothes:
            db.session.delete(clothes)
            db.session.commit()
            return make_response({'message': 'Clothes deleted'}, 204)
        return make_response({'message': 'Clothes not found'}, 404)

#////////////////////////////////////////////////////////////////////////////////////////////
class History(Resource):
    def get(self):
        histories = [h.to_dict() for h in History.query.all()]
        return make_response(histories, 200)

    def post(self):
        data = request.get_json()
        try:
            new_history = History(
                event_id=data['event_id'],
                clothes_id=data['clothes_id'],
                user_id=data['user_id'],
                date=data['date']
            )
            db.session.add(new_history)
            db.session.commit()
            return make_response(new_history.to_dict(), 201)
        except ValueError:
            db.session.rollback()
            return make_response({"errors": ["Validation errors"]}, 400)

class HistoryByID(Resource):
    def get(self, id):
        history = History.query.filter_by(id=id).first()
        if not history:
            return make_response({"errors": "History not found"}, 404)
        return make_response(history.to_dict(), 200)

    def patch(self, id):
        history = History.query.filter_by(id=id).first()
        if history:
            data = request.get_json()
            history.event_id = data['event_id']
            history.clothes_id = data['clothes_id']
            history.user_id = data['user_id']
            history.date = data['date']
            db.session.add(history)
            db.session.commit()
            return make_response(history.to_dict(), 200)
        return make_response({'message': 'History not found'}, 404)

    def delete(self, id):
        history = History.query.filter_by(id=id).first()
        if history:
            db.session.delete(history)
            db.session.commit()
            return make_response({'message': 'History deleted'}, 204)
        return make_response({'message': 'History not found'}, 404)


#////////////////////////////////////////////////////////////////////////////////////////////

api.add_resource(User_Route, '/users')
api.add_resource(UserByID, '/users/<int:id>')
api.add_resource(Event, '/events')
api.add_resource(EventByID, '/events/<int:id>')
api.add_resource(CheckSession, '/check_session')
api.add_resource(Login, '/login')
api.add_resource(Logout, '/logout')
api.add_resource(Closet, '/closets')
api.add_resource(ClosetByID, '/closets/<int:id>')
api.add_resource(ClothesResource, '/clothes')
api.add_resource(ClothesByID, '/clothes/<int:id>')
api.add_resource(History, '/history')
api.add_resource(HistoryByID, '/history/<int:id>')

#////////////////////////////////////////////////////////////////////////////////////////////

if __name__ == '__main__':
    app.run(port=5555, debug=True)

