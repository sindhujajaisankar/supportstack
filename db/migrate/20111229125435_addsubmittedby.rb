class Addsubmittedby < ActiveRecord::Migration
  def up
  add_column :tickets,:submittedby,:integer
  end

  def down
  end
end
