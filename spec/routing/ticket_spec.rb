require "spec_helper"

describe TicketController do
  

describe "routing" do
     it "routes to #ticketdash" do
        get("/home/ticketdash").should route_to("home#ticketdash")
     end

     it "routes to #new" do
        get("/home/new").should route_to("home#new")
     end
   
    it "routes to #create" do
        get("/home/create").should route_to("home#create")
     end
   
    it "routes to #opentick" do
        get("/home/opentick").should route_to("home#opentick")
     end

    it "routes to #destroy" do
        get("/home/destroy").should route_to("home#destroy")
     end

    it "routes to #assign" do
        get("/home/assign").should route_to("home#assign")
     end

    it "routes to #save" do
        get("/home/save").should route_to("home#save")
     end

    it "routes to #completedtick" do
        get("/home/completedtick").should route_to("home#completedtick")
     end

    it "routes to #pendingtick" do
        get("/home/pendingtick").should route_to("home#pendingtick")
     end

end
end
