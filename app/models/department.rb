class Department < ActiveRecord::Base
validates :name, :uniqueness => true 
validates :name, :Presence => true 
validates :email_id, :Presence => true
#validates :phone_number, :Numericality=> true
#validate_length_of :name, :maximum => 5
has_many :staff_admins,:dependent=>:destroy
 has_many :tickets,:dependent=>:destroy
end
