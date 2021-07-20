import { BaseFieldProps, UserData } from "lib/types";

const fields = (props: UserData): BaseFieldProps[] => [
  {
    name: "userName",
    type: "text",
    label: "Username",
    value: props.userName || "",
    placeholder: "Enter username...",
    errors: "",
    style: { width: "50%" },
    required: true
  },
  {
    name: "email",
    type: "text",
    label: "Email",
    value: props.email || "",
    placeholder: "Enter email...",
    errors: "",
    style: { width: "50%" },
    required: true
  },
  {
    name: "firstName",
    type: "text",
    label: "First Name",
    value: props.firstName || "",
    placeholder: "Enter user's first name...",
    errors: "",
    style: { width: "50%" },
    required: true
  },
  {
    name: "lastName",
    type: "text",
    label: "Last Name",
    value: props.lastName || "",
    placeholder: "Enter user's last name...",
    errors: "",
    style: { width: "50%" },
    required: true
  },
  {
    name: "street",
    type: "text",
    label: "Street",
    value: props.address ? props.address.street : "",
    placeholder: "Enter a street address...",
    errors: "",
    style: { width: "65%" },
    required: true
  },
  {
    name: "suite",
    type: "text",
    label: "Suite",
    value: props.address ? props.address.suite : "",
    placeholder: "Optional suite address...",
    errors: "",
    style: { width: "35%" },
    required: false
  },
  {
    name: "city",
    type: "text",
    label: "City",
    value: props.address ? props.address.city : "",
    placeholder: "Enter a city...",
    errors: "",
    style: { width: "40%" },
    required: true
  },
  {
    name: "state",
    type: "text",
    label: "State",
    value: props.address ? props.address.state : "",
    placeholder: "Enter a state...",
    errors: "",
    style: { width: "40%" },
    required: true
  },
  {
    name: "zipCode",
    type: "text",
    label: "Zip Code",
    value: props.address ? props.address.zipCode : "",
    placeholder: "Enter a zip code...",
    errors: "",
    style: { width: "20%" },
    required: true
  },
  {
    name: "backgroundInfo",
    type: "textarea",
    label: "Background Infomation",
    value: props.backgroundInfo || "",
    placeholder: "Enter user's background information...",
    errors: "",
    style: { width: "100%" },
    required: true
  }
];

export default fields;
