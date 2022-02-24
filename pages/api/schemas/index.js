import  {  gql  }  from  "apollo-server-micro"; 

export  const  typeDefs  =  gql`
    type  Data {
       data: [String!]
    }
    type  Document {
        document: String!
     }
    type  Query {
        getListURL: Data,
        getDocumentInfo(slug: [String!]): Document
    }  
    `
  