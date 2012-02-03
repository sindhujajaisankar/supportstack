require 'spec_helper'

describe Department do
	
	describe "new" do
		it "should be successful" do
		get 'new'
		@dep=Department.new
	  end
  end


	
	describe "create" do
    it "should be successful" do
			
			 post'create'
	   	params=Factory.attributes_for(:department)
			#@dep=Department.new(params)
			#@dep=Department.create(params)
			if (@dep.valid)
				@dep.save
			response.should be_successful
			else
				response.should render_template("new")
		end
	end
end	
end