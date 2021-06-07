import { Response } from 'express'
import mongoose = require('mongoose')
import { env } from '../environment/env';
import { IModel } from '../interfaces/IModel';
import { IPopulate } from '../interfaces/IPopulate';
import { BaseModel } from '../models/base.model';

/**
 * Provides functions to be used with express routes. Serves common CRUD fuctionality. 
 */
export class BaseController {
    public useModReturnNew = { useFindAndModify: false, new: true }
    public model: IModel;
    constructor(model: IModel) {
        this.model = model;
    }
    /**
    * Sends the document as JSON in the body of response, and sets status to 200
    * @param doc the MongoDB document to be returned to the client as JSON
    * @param res the response object that will be used to send http response
    */
    jsonRes(doc: any, res: Response) {
        res.status(200).json(doc);
    }
    /**
     * @param err error object of any type genereated by the system
     * @param message custom response message to be provided to the client in a JSON body response ({error:'message'})
     * @param res response object to be used to to send 
     * @param status custom status code, defaults to 500
     */
    errRes(err: any, res: Response, message = 'Sever Error', status = 500) {
        if (env().stage === 'dev') {

            res.status(status).json({ error: message });
        } else {
            res.status(status).json({ error: message });
        }
    }
    /**
     * Creates a new document 
     */
    create(res: Response, document: any, populate?: IPopulate, errMsg = 'Failed to create') {
        this.model.create<mongoose.Document>(document).then((doc: mongoose.Document) => {
            if (populate) {
                doc.populate(populate).execPopulate().then(populatedDoc => {
                    this.jsonRes(populatedDoc, res)
                }).catch(err => { this.errRes(err, res, errMsg) })
            } else {
                this.jsonRes(doc, res)
            }
        }).catch(err => { this.errRes(err, res, errMsg) })
    }
    /**
     * Returns all documents of model
     */
    find(res: Response, populate?: IPopulate, errMsg = 'Failed to find documents') {
        this.model.find(populate).then(doc => { this.jsonRes(doc, res) }, err => { this.errRes(err, res, errMsg) });
    }
    /**
     * Returns single doucument of model specified by _id. 
     */
    findById(res: Response, documentId: string, populate?: IPopulate, errMsg = `Failed to find document ${documentId}`) {
        this.model.findById(documentId, populate).then(doc => { this.jsonRes(doc, res) }, err => { this.errRes(err, res, errMsg) }).catch( err => {this.errRes(err, res, 'Failed to retrieve doc')});
    }
    /**
     * Returns single document from given model that matches the query.
     */
    findOne(res: Response, query: any, populate?: IPopulate, errMsg = `Failed to find document ${query}`) {
        this.model.findOne(query, populate).then(doc => { this.jsonRes(doc, res) }, err => { this.errRes(err, res, errMsg) });
    }
    findMany(res: Response, query: any, populate?: IPopulate, errMsg = `Failed to find document ${query}`) {
        this.model.findMany(query, populate).then(doc => { this.jsonRes(doc, res) }, err => { this.errRes(err, res, errMsg) });
    }

    /**
     * Updates single document, 
     */
    updateById(res: Response, documentId: string, document: any, populate?: IPopulate | IPopulate[], errMsg = `Failed to update document ${documentId}`) {
        this.model.updateById(documentId, document, populate).then(doc => { this.jsonRes(doc, res) }, err => { this.errRes(err, res, errMsg) });
    }
    /**
     * Deletes a single document selected by id 
     */
    deleteById(res: Response, documentId: string, errMsg = `Failed to delete document ${documentId}`) {
        this.model.deleteById(documentId).then(doc => { this.jsonRes(doc, res) }, err => { this.errRes(err, res, errMsg) });
    }
}