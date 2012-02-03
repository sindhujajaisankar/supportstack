class TicketController < ApplicationController
	before_filter :authenticate_alluser!
	before_filter:auth_admin
layout "aa"


def ticketdash
	@open=Ticket.find_all_by_status("open").count
	@pending=Ticket.find_all_by_status("pending").count
	@completed=Ticket.find_all_by_status("completed").count
end

def new
if alluser_signed_in?
if current_alluser.role_id == 1
@tick=Ticket.new
else
redirect_to '/allusers/sign_in'
end
else
redirect_to '/allusers/sign_in'
end
end
def create
@tick=Ticket.create(params[:ticket])
img=Attachment.create(params[:attachment])
@tick.attachment=img if img
@tick.submittedby=current_alluser.id
@tick.update_attributes(:status => "open")
#@tick.save

     if @tick.valid?
			 @tick.save
		else
       @error=@tick.errors.messages			
       @tick=Ticket.new
		render :action=>"new"		
   end

end
def opentick
	@ticket=Ticket.where(:status=>"open").paginate(:page => params[:page], :per_page => 5)
	@user=Alluser.all
end

def destroy
@ticket=Ticket.find_by_id(params[:id])
@ticket.destroy
redirect_to '/ticket/opentick'
end
def assign
@ticket=Ticket.find(params[:id],:include=>[:attachment])
@ticket1=Ticket.find_by_id(params[:id])	
@s=StaffAdmin.where(:department_id=>@ticket1.department_id)
	end
	def download
	@tick=Ticket.find_by_id(params[:id])
   send_file("#{Rails.root}/public/system/avatars/#{@tick.attachment.id}/original/#{@tick.attachment.avatar_file_name}",:filename => "#{@tick.attachment.avatar_file_name}",
	 :type=>"#{@tick.attachment.avatar_content_type}")
	end
	
def save	
	@ticket1=Ticket.find_by_id(params[:id])
	@ticket1.update_attributes(:alluser_id=>params[:ticket][:alluser_id],:status=>"pending") 
end
def completedtick
	@ticket=Ticket.where(:status=>"completed").paginate(:page => params[:page], :per_page => 5)
	@user=Alluser.all
end
def pendingtick
	@ticket=Ticket.where(:status=>"pending").paginate(:page => params[:page], :per_page => 5)
	@user=Alluser.all
end


def auth_admin
               if (!(current_alluser.role.name=="admin"))
                          redirect_to"/allusers/sign_in"
                                       end
                       end
end





