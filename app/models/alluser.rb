class Alluser < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :encryptable, :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :fullname,:mobile,:phone,:username,:role_id, :email, :password, :password_confirmation, :remember_me

belongs_to :role
 has_one   :client
 has_one   :staff_admin
 has_many  :tickets,:dependent=>:destroy
 has_many  :attachments,:dependent=>:destroy
 has_many  :comments,:dependent=>:destroy
 validates :fullname, :Presence => true 
 validates :username, :Presence=>true
end


