require 'rails_helper'

RSpec.describe Post, type: :model do
  it {should validate_presence_of(:author)}
  it {should validate_presence_of(:authorId)}
  it {should validate_presence_of(:likes)}
  it {should validate_presence_of(:reads)}
  it {should validate_presence_of(:tags)}
end
