import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CurrentUser } from "interfaces/auth";
import authAPI from "services/authAPI";
import registerAPI from "services/registerAPI";

interface AuthState {
  currentUser: any;
  isLoading: boolean;
  error?: string;
}

const initialState: AuthState = {
  currentUser: JSON.parse(localStorage.getItem("user") as string) || {},
  isLoading: false,
  error: "",
};

export const login = createAsyncThunk("auth/login", async (values: any) => {
  try {
    const data = await authAPI.login(values);
    localStorage.setItem("user", JSON.stringify(data));
    return data;
  } catch (error) {
    throw error;
  }
});

export const register = createAsyncThunk(
  "auth/register",
  async (values: any) => {
    try {
      const data = await registerAPI.register(values);
      localStorage.setItem("user", JSON.stringify(data));
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state: AuthState) => {
      localStorage.removeItem("user");
      return { ...state, currentUser: {} as CurrentUser };
    },
  },
  extraReducers(builder) {
    builder.addCase(login.pending, (state) => {
      return { ...state, isLoading: true, error: "" };
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      return { ...state, isLoading: false, currentUser: payload };
    });
    builder.addCase(login.rejected, (state, { error }) => {
      return { ...state, isLoading: false, error: error.message };
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
