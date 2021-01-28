# Seeds

# Creating a User
user = User.create email: 'sarah@test.com', password: '123456', password_confirmation: '123456'

# Creating apartments
apartments = [
  {
    street: '221B Baker Street',
    city: 'London',
    state: 'England',
    manager: 'Ms. Hudson',
    email: 'mzhud@email.com',
    price: '1000',
    bedrooms: 2,
    bathrooms: 2,
    pets: 'no',
    pic: "https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/dn9JmbyHvw0DTUWlpE8V9Z0K4lU=/1660x934/smart/filters:no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/S4ZX2DV7BZDW5HW54OMMISE4Y4.jpg",
    user_id: user.id
  },
  {
    street: '221B Baker Street',
    city: 'London',
    state: 'England',
    manager: 'Ms. Hudson',
    email: 'mzhud@email.com',
    price: '1000',
    bedrooms: 2,
    bathrooms: 2,
    pets: 'no',
    pic: "https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/dn9JmbyHvw0DTUWlpE8V9Z0K4lU=/1660x934/smart/filters:no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/S4ZX2DV7BZDW5HW54OMMISE4Y4.jpg",
    user_id: user.id
  },
  {
    street: '221B Baker Street',
    city: 'London',
    state: 'England',
    manager: 'Ms. Hudson',
    email: 'mzhud@email.com',
    price: '1000',
    bedrooms: 2,
    bathrooms: 2,
    pets: 'no',
    pic: "https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/dn9JmbyHvw0DTUWlpE8V9Z0K4lU=/1660x934/smart/filters:no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/S4ZX2DV7BZDW5HW54OMMISE4Y4.jpg",
    user_id: user.id
  },
  {
    street: '221A Baker Street',
    city: 'London',
    state: 'England',
    manager: 'Ms. Hudson',
    email: 'mzhud@email.com',
    price: '1500',
    bedrooms: 3,
    bathrooms: 3,
    pets: 'no',
    pic: 'https://photos.zillowstatic.com/fp/52075f26c2333c8ad50cdb5ec68f5080-p_e.jpg',
    user_id: user.id
  },
  {
    street: '221A Baker Street',
    city: 'London',
    state: 'England',
    manager: 'Ms. Hudson',
    email: 'mzhud@email.com',
    price: '1500',
    bedrooms: 3,
    bathrooms: 3,
    pets: 'no',
    pic: 'https://photos.zillowstatic.com/fp/52075f26c2333c8ad50cdb5ec68f5080-p_e.jpg',
    user_id: user.id
  },
  {
    street: '221A Baker Street',
    city: 'London',
    state: 'England',
    manager: 'Ms. Hudson',
    email: 'mzhud@email.com',
    price: '1500',
    bedrooms: 3,
    bathrooms: 3,
    pets: 'no',
    pic: 'https://photos.zillowstatic.com/fp/52075f26c2333c8ad50cdb5ec68f5080-p_e.jpg',
    user_id: user.id
  }
]

apartments.each do |attr|
  Apartment.create attr
  puts "creating apartment: #{attr}"
end