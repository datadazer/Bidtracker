class BidSerializer < ActiveModel::Serializer
  attributes :id, :location, :job, :estimator, :plan_date, :status, :direct_margin, :gross_profit
end
