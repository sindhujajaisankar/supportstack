# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20120109124627) do

  create_table "allusers", :force => true do |t|
    t.string   "email",                                 :default => "", :null => false
    t.string   "encrypted_password",     :limit => 128, :default => "", :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                         :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "role_id"
    t.string   "fullname"
    t.string   "username"
    t.string   "mobile"
    t.string   "phone"
  end

  add_index "allusers", ["email"], :name => "index_allusers_on_email", :unique => true
  add_index "allusers", ["reset_password_token"], :name => "index_allusers_on_reset_password_token", :unique => true

  create_table "attachments", :force => true do |t|
    t.integer  "attachable_id"
    t.string   "attachable_type"
    t.string   "avatar_content_type"
    t.datetime "avatar_updated_at"
    t.string   "avatar_file_name"
    t.integer  "avatar_file_size"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "clients", :force => true do |t|
    t.integer  "alluser_id"
    t.string   "address_1"
    t.string   "address_2"
    t.string   "city"
    t.string   "state"
    t.string   "country"
    t.string   "fax"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "companyname"
  end

  create_table "comments", :force => true do |t|
    t.string   "title",            :limit => 50, :default => ""
    t.text     "comment"
    t.integer  "commentable_id"
    t.string   "commentable_type"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "comments", ["commentable_id"], :name => "index_comments_on_commentable_id"
  add_index "comments", ["commentable_type"], :name => "index_comments_on_commentable_type"
  add_index "comments", ["user_id"], :name => "index_comments_on_user_id"

  create_table "departments", :force => true do |t|
    t.string   "name"
    t.string   "description"
    t.string   "email_id"
    t.integer  "phone_number"
    t.string   "fax"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "faqs", :force => true do |t|
    t.string   "question"
    t.integer  "alluser_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "news", :force => true do |t|
    t.string   "subject"
    t.string   "description"
    t.datetime "date"
    t.string   "place"
    t.integer  "alluser_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "roles", :force => true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "staff_admins", :force => true do |t|
    t.integer  "alluser_id"
    t.integer  "department_id"
    t.integer  "priveleges"
    t.integer  "ticket_notifier"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "tickets", :force => true do |t|
    t.integer  "alluser_id"
    t.integer  "department_id"
    t.string   "description"
    t.string   "priority"
    t.string   "status"
    t.string   "category"
    t.string   "subject"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "submittedby"
  end

end
