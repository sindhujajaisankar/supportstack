require 'spec_helper'

describe Alluser do
  it { should have_one(:client)}
  it { should have_one(:staff_admin)}
  #it { should have_many(:comments)}
  #it { should have_many(:attachments)}
  it { should have_many(:tickets)}
  it { should validate_presence_of(:fullname)}
  it { should validate_presence_of(:username)}
  it { should belong_to(:role)}
 
end
