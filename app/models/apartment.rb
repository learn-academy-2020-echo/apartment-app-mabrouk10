class Apartment < ApplicationRecord
    belongs_to :user
    validates :street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets, :pic, :user_id, presence: true
end
