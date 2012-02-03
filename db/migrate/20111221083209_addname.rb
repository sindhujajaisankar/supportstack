class Addname < ActiveRecord::Migration
  def up
    add_column :allusers,:name,:string
  end

  def down
    remove_column :allusers,:name
  end
end
