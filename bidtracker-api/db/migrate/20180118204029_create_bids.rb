class CreateBids < ActiveRecord::Migration[5.1]
  def change
    create_table :bids do |t|
      t.string :status
      t.string :job
      t.string :location
      t.integer :estimator
      t.datetime :plan_date

      t.timestamps
    end
  end
end
