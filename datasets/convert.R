load("data.rdata")
data_name <- ls()[ls() != "data_name"]
data_df <- get(data_name)
write.csv(data_df, file = "data.csv")