class Attachment < ActiveRecord::Base
          belongs_to :attachable,:polymorphic=>true
	 has_attached_file :avatar, :styles => { :medium => "300x300>", :thumb => "100x100>" }
end
