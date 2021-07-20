import MockAdapter from "axios-mock-adapter";
import axios from "lib/utils/axiosConfig";

const mockAxios = new MockAdapter(axios);

export default mockAxios;
