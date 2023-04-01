# getStaticProps is better because the data is cached everytime it regenerates ... but for getServerSideProps , the data is still fetched again .. an this causes performance issues .... 



NB ... you don't have access to req and res in getStaticProps(){}

# if you app has to deal with authentication .... use getServerSideProps..

# For this app .. we just need the getStaticProps()