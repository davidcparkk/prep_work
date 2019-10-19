require 'rails_helper'

RSpec.describe Ping, type: :model do
  it {should validate_presence_of(:success)}
end
