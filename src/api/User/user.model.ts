import { BaseModel } from "../utils/base.model";

export class User extends BaseModel {
    static get tableName(){
        return "users";
    }

    static get idColumn(){ 
        return "id";
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: [],
            properties: {
                
            }
        }
    }
}