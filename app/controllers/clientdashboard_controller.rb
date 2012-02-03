class ClientdashboardController < ApplicationController
	before_filter :authenticate_alluser!
layout "cc"
def new
@tick=Ticket.new

end
def create
	@tick=Ticket.create(params[:ticket])
  img=Attachment.create(params[:attachment])
	@tick.attachment=img if img
	@tick.submittedby=current_alluser.id
	@tick.update_attributes(:status => "open")
@tick.save
redirect_to '/clientdashboard/new'
end
def edit
	@user=current_alluser.id	
  #@user=Alluser.find_by_id(@user)
		@c=Client.find_by_alluser_id(@user)
	@user=@c.alluser	
end
def update
	@user=current_alluser.id
	#@user=Alluser.find_by_id(@user)
	@c=Client.find_by_alluser_id(@user)
	@user=@c.alluser	
	if(@user.update_attributes(params[:alluser]))
	@c.update_attributes(params[:client])	
	redirect_to '/clientdashboard/new'	
	else
		@error=@user.errors.messages
		@user=current_alluser.id
		@c=Client.find_by_alluser_id(@user)
	@user=@c.alluser	
	render :action=>"edit"
	end
	end
			
def mytickets
@user=current_alluser.id
@ticket=Ticket.where(:submittedby=>@user)
@dep=Department.all
end
def changestatus
	@ticket=Ticket.find_by_id(params[:id])
	@dep=@ticket.department
	#@comment=Comment.new
  #@comments = @ticket.comments.recent.all
end
def updstatus
	@ticket=Ticket.find_by_id(params[:id])
	@ticket.update_attributes(:priority=>params[:ticket][:priority],:status=>params[:ticket][:status])
	#@ticket.comments.create(:title=>"client post",:comment=>params[:comment],:user_id=>current_alluser.id)
	#	@comment=Comment.new
		
	#@comment=Comment.new
  #@comments = @ticket.comments.recent.all
  redirect_to '/clientdashboard/mytickets'
end

def addcomments
	@ticket=Ticket.find_by_id(params[:id])
	@comment=Comment.new
  @comments= @ticket.comments.recent.all
end
def post
	
	p params[:comment]
	    @ticket=Ticket.find_by_id(params[:id])
			@comment=Comment.new
	    @ticket.comments.create(:title=>"client post",:comment=>params[:comment][:comment],:user_id=>current_alluser.id)
	    @comments = @ticket.comments.recent.all
	     respond_to do |format|
			 format.js
		end
end
def destroy
	 @comment=Comment.all
  #@comments= @ticket.comments.recent.limit(20).all
	 @comment.destroy
end

	end
