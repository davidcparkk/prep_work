FactoryBot.define do 
  factory :post do
    author { Faker::Lorem.word }
    authorId { Faker::Number.number(10) }
    likes { Faker::Number.number(10) }
    reads { Faker::Number.number(10) }
    tags { Faker::Lorem.word }
  end
end
