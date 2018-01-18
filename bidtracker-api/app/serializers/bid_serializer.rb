class BidSerializer < ActiveModel::Serializer
  attributes :id, :location, :job, :estimator, :plan_date, :status
end
