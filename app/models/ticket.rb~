class Ticket < ActiveRecord::Base
 
 validates :subject, :Presence => true 
 validates :description, :Presence => true 

 acts_as_commentable
 belongs_to :alluser
 belongs_to :department
 has_one   :attachment,:as=>:attachable

end 
