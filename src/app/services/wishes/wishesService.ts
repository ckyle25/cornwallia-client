import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import axios from 'axios';

@Injectable()
export class WishesService {

  private url: string = environment.serverUrl;

  config = {
    withCredentials: true
  };

  public getActiveUser(userId: number): Promise<any> {

    const body = { id: userId };

    return axios
            .post(`${this.url}api/wishes/getActiveUser`, body, this.config)
            .then(response => {
              return response.data[0];
            });
  }

  public getFamilyReference(): Promise<any> {

    return axios
            .get(`${this.url}api/wishes/getFamilyReference`, this.config)
            .then(response => {
              return response.data;
            });
  }

  public getAllUsers(): Promise<any> {

    return axios
            .get(`${this.url}api/wishes/getAllUsers`, this.config)
            .then(response => {
              return response.data;
            });
  }

  public getWishes(userId: number): Promise<any> {

    const body = { id: userId };

    return axios
            .post(`${this.url}api/wishes/getWishes`, body, this.config)
            .then(response => {
              return response.data;
            });
  }

  public reserveWish(reservedUserId: number, wishId: number): Promise<any> {

    const body = {
      reservedUserId: reservedUserId,
      wishId: wishId
     };

    return axios
            .post(`${this.url}api/wishes/reserveWish`, body, this.config)
            .then(response => {
              return response.data;
            });
  }

  public releaseWish(wishId: number): Promise<any> {

    const body = {
      wishId: wishId,
     };

    return axios
            .post(`${this.url}api/wishes/releaseWish`, body, this.config)
            .then(response => {
              return response.data;
            });
  }

  public addWish(userId: number, title: string, description: string, cost: number, link: string, rating: number): Promise<any> {

    const body = {
      userId,
      title,
      description,
      cost,
      link,
      rating
    };

    return axios
            .post(`${this.url}api/wishes/addWish`, body, this.config)
            .then(response => {
              return response.data;
            });
  }

  public deleteWish(wishId: number): Promise<any> {

    const body = {
      wishId: wishId,
     };

    return axios
            .post(`${this.url}api/wishes/deleteWish`, body, this.config)
            .then(response => {
              return response.data;
            });
  }

  public getReservedWishes(userId: number): Promise<any> {

    const body = {
      userId
     };

    return axios
            .post(`${this.url}api/wishes/getReservedWishes`, body, this.config)
            .then(response => {
              return response.data;
            });
  }

  public updateBio(userId: number, bio: string): Promise<any> {

    const body = {
      userId,
      bio
     };

    return axios
            .put(`${this.url}api/wishes/updateBio`, body, this.config)
            .then(response => {
              return response.data;
            });
  }

  public updateWish(title: string, description: string, cost: number, link: string, rating: number, wishId: number): Promise<any> {

    const body = {
      title,
      description,
      cost,
      link,
      rating,
      wishId
     };

    return axios
            .put(`${this.url}api/wishes/updateWish`, body, this.config)
            .then(response => {
              return response.data;
            });
  }

  public updateWishesUser(userId: number, edwUserId: number, familyId: number, isParent: number, firstName: string, lastName: string, isAdmin: number,
                         birthday: string, anniversary: string, group1: number, group2: number, group3: number, group4: number): Promise<any> {

    const body = {
      userId,
      edwUserId,
      familyId,
      isParent,
      firstName,
      lastName,
      isAdmin,
      birthday,
      anniversary,
      group1,
      group2,
      group3,
      group4
     };

    return axios
            .put(`${this.url}api/wishes/updateUser`, body, this.config)
            .then(response => {
              return response.data;
            });
  }

  public getReserverEmail(userId: number) {
    const body = {
      userId
    };

    return axios
            .post(`${this.url}api/wishes/getReserverEmail`, body, this.config)
            .then(response => {
              return response.data;
            });

  }

  public getAmazonWishes(userId: number) {
    const body = {
      userId
    };

    return axios
            .post(`${this.url}api/wishes/getAmazonWishes`, body, this.config)
            .then(response => {
              return response.data;
            });

  }

  public updateWishesFamily(familyId: number, familyName: string, parent1: number, parent2: number, familyGroup: number): Promise<any> {

    const body = {
      familyId,
      familyName,
      parent1,
      parent2,
      familyGroup
     };

    return axios
            .put(`${this.url}api/wishes/updateFamily`, body, this.config)
            .then(response => {
              return response.data;
            });
  }

  public emailReserver(userId: number, currentUserId: number, wishTitle: string, wishRecipient: string, content: string, userName: string) {
    const body = {
      userId,
      currentUserId,
      wishTitle,
      wishRecipient,
      content,
      userName
    };

    return axios
            .post(`${this.url}api/wishes/emailReserver`, body, this.config)
            .then(response => {
              return response.data;
            });
  }
}
