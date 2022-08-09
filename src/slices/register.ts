import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CurrentUser } from "interfaces/auth";
import registerAPI from "services/registerAPI";

interface RegisterState {
    currentUser: any;
    isLoading: boolean;
    error?: string;
  }

