require 'spec_helper'

describe Ticket do
  it {should have_one(:attachment)}
  it { should validate_presence_of(:subject)}
  it { should validate_presence_of(:description)}
  it { should belong_to(:alluser)}
  it {should belong_to(:department)}
end
