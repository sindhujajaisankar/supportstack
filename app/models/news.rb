class News < ActiveRecord::Base
	
belongs_to :alluser
validates :subject, :presence => true
validates :description,:presence=>true
validates :place, :presence => true
validates :date, :presence => true
end
