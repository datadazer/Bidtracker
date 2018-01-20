class AddDataToBid < ActiveRecord::Migration[5.1]
  def change
    add_column :bids, :gross_profit, :integer
    add_column :bids, :direct_margin, :integer
  end
end
