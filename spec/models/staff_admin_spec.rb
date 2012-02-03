require 'spec_helper'

describe StaffAdmin do
  it { should belong_to(:alluser)}
  it {should belong_to(:department)}
end
