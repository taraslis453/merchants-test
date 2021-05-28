import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { LoadingStatusT } from "../shared/types";

interface MerchantsBodyI {
  limit?: number;
  offset?: number;
  search?: string;
}

export const getMerchants = createAsyncThunk(
  "/merchants",
  async ({ limit, offset, search }: MerchantsBodyI) => {
    const response = await axios.get(
      `https://api.staging.quickcheckoutpage.com/v1/merchants`,
      {
        params: {
          limit,
          offset,
          search,
        },
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MjQwMjEwNzcsImlhdCI6MTYyMTQyOTA3NywiaXNzIjoicWMtYXBpIiwibmJmIjoxNjIxNDI5MDc3LCJ1c2VySWQiOiIyMDg2MjZlZS03ZTY5LTQ4NmMtYTAwNC00YWRjNGY0YWUwNWEiLCJ1c2VyUm9sZSI6IiJ9.6d4IEASfBS17Z-rZdIf25PlUxsJ01N5-rHnPtrx2CBU",
        },
      }
    );
    return response.data;
  }
);

interface MerchantsI {
  id: string;
  name: string;
  email: string;
  website: string;
  memoText: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

interface MerchantsResponseI {
  merchants: MerchantsI[];
  totalMerchants: number;
}

interface InitialStateI {
  merchants: MerchantsI[] | null;
  totalMerchants: number;
  pageSize: number;
  currentPage: number;
  search: string;
  status: LoadingStatusT;
}

const initialState: InitialStateI = {
  merchants: null,
  totalMerchants: 0,
  pageSize: 20,
  currentPage: 0,
  search: "",
  status: null,
};

const merchantsSlice = createSlice({
  name: "merchants",
  initialState,
  reducers: {
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<"minus" | "plus">) => {
      if (action.payload === "minus") {
        state.currentPage = state.currentPage - 1;
      } else {
        state.currentPage = state.currentPage + 1;
      }
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMerchants.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(
      getMerchants.fulfilled,
      (state, action: PayloadAction<MerchantsResponseI>) => {
        state.merchants = action.payload.merchants;
        state.totalMerchants = action.payload.totalMerchants;
        state.status = "fulfilled";
      }
    );
    builder.addCase(getMerchants.rejected, (state) => {
      state.status = "rejected";
    });
  },
});

export const {
  setPageSize,
  setCurrentPage,
  setSearch,
} = merchantsSlice.actions;

export default merchantsSlice.reducer;
