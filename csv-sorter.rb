require 'csv'
require 'io/console'
songList = []

CSV.open("karafuncatalog.csv") do |csv|
  songList = csv.select { |row| row['Title'] && row['Artist']}
  puts songList
end