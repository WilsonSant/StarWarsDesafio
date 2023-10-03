import React from "react";
import { Form, Input } from "antd";
import {
  getPasswordFields,
  getUserFields,
  passwordFields,
  userFields,
} from "../../../fable/utils/components/Register.fs.js";

const { Item } = Form;
const { Password } = Input;
function RegisterForm(props) {
  const { currentLanguage, form } = props;

  return (
    <div>
      <Form form={form} layout="vertical" requiredMark={false}>
        <Item
          label={
            <p className="text-lg font-mono">{userFields(currentLanguage)}</p>
          }
          name="userName"
          rules={getUserFields(currentLanguage)}
        >
          <Input />
        </Item>
        <Item
          label={
            <p className="text-lg font-mono">
              {passwordFields(currentLanguage)}
            </p>
          }
          name="password"
          rules={getPasswordFields(currentLanguage)}
        >
          <Password />
        </Item>
      </Form>
    </div>
  );
}

export default RegisterForm;
