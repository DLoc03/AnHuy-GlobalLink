import { useState } from "react";

import Button from "../common/Button";
import Input from "../common/Input";
import TextAreaInput from "../common/TextAreaInput";
import SelectInput from "../common/SelectInput";
import Alert from "../common/Alert";

import { validateEmail } from "@/utils/validators";
import { services } from "@/constants/service";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Vui lòng nhập họ tên";
    if (!validateEmail(formData.email)) newErrors.email = "Email không hợp lệ";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);

      fetch("/api.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setAlert({
              type: "success",
              message: data.message || "Gửi liên hệ thành công!",
            });
            setFormData({
              name: "",
              email: "",
              phone: "",
              service: "",
              message: "",
            });
          } else {
            throw new Error(data.message);
          }
        })
        .catch(() => {
          setAlert({
            type: "error",
            message: "Vui lòng kiểm tra lại thông tin đã nhập",
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <>
      <div className="space-y-6 rounded-3xl bg-white/90 p-8 shadow-lg backdrop-blur-md">
        <h2 className="text-2xl font-semibold">Liên hệ tư vấn</h2>

        <Input
          label="Họ và tên"
          placeholder="Nhập họ và tên"
          required
          value={formData.name}
          onChange={handleChange("name")}
          error={errors.name}
        />

        <Input
          label="Email"
          placeholder="Nhập email của bạn"
          type="email"
          required
          value={formData.email}
          onChange={handleChange("email")}
          error={errors.email}
        />

        <Input
          label="Số điện thoại"
          placeholder="Nhập số điện thoại (Không bắt buộc)"
          value={formData.phone}
          onChange={handleChange("phone")}
        />

        <SelectInput
          label="Dịch vụ quan tâm"
          placeholder="Chọn dịch vụ bạn quan tâm"
          options={services}
          value={formData.service}
          onChange={(value) =>
            setFormData((prev) => ({ ...prev, service: value }))
          }
        />

        <TextAreaInput
          label="Nội dung"
          placeholder="Nhập nội dung bạn muốn tư vấn..."
          value={formData.message}
          onChange={handleChange("message")}
        />

        <Button
          label="Gửi liên hệ"
          onClick={handleSubmit}
          loading={loading}
          className="bg-primary px-6 py-3 text-white hover:opacity-90"
        />
      </div>

      {alert && (
        <Alert
          type={alert.type}
          message={alert.message}
          duration={4000}
          onClose={() => setAlert(null)}
        />
      )}
    </>
  );
}

export default ContactForm;
