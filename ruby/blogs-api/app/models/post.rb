class Post < ApplicationRecord
  validates_presence_of :author, :authorId, :likes, :reads, :tags
end
