class Addfieldstoclient < ActiveRecord::Migration
  def up
 add_column :clients,:companyname,:string
 
  end

  def down
 remove_column :clients,:companyname
  end
end
