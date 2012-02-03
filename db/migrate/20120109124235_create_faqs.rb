class CreateFaqs < ActiveRecord::Migration
  def change
    create_table :faqs do |t|
      t.string   :question
      t.integer  :alluser_id
      t.timestamps
    end
  end
end
