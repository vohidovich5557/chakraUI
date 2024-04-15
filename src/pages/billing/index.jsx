import React from "react";
import Circle from "../../assets/billing-img/circle.svg";
import { Input } from "../../components/ui/input";
import { SellingIcon } from "../../assets/billing-img/selling-icon";
import { MasterCard } from "../../assets/billing-img/master-card";
import { Visa } from "../../assets/billing-img/visa-icon";
import { TransitionCard } from "../../components/card/transition-card";
import { Edit } from "../../assets/billing-img/edit";
import { usePostCard } from "./service/mutation/usePostCard";
import { useForm } from "react-hook-form";
import { useGetCards } from "./service/query/useGetCards";
import bgImg from "../../assets/tables-img/bg-img.svg";
import { Modal } from "../../components/ui/modal";
import { useModal } from "../../hooks/useModal";
import { BillingCard } from "../../components/card/billing-card";
import { usezGetBilling } from "./service/query/useGetBilling";
import { Link, useNavigate } from "react-router-dom";
import { PayPal } from "../../assets/billing-img/paypal";
import { toast } from "react-toastify";

export const Billing = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const { mutate, isPending } = usePostCard();
  const { isOpen, open, close } = useModal();
  const { data: data2, isLoading: isLoading2 } = useGetCards();
  const { data, isLoading } = usezGetBilling();
  const submit = (data) => {
    console.log(data);
    mutate(data, {
      onSuccess: () => {
        toast.success("successfully added card");
        reset();
        navigate("/app/billing");
      },
    });
  };
  return (
    <>
      <div className="w-[1144px] h-auto">
        <Modal close={close} isOpen={isOpen}>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 items-center justify-center h-[60vh] md:h-auto lg:h-auto lg:py-[52px] lg:px-[92px] overflow-scroll gap-5">
            <form onSubmit={handleSubmit(submit)}>
              <div className="flex items-center gap-[40px]">
                <Input
                  variant="primary362"
                  label="Master Card"
                  {...register("mastercard", { required: true })}
                />
                <Input
                  variant="primary362"
                  label="Visa Card"
                  {...register("visacard", { required: true })}
                />
              </div>
              <button className=" outline-none w-[130px] h-[50px] bg-teal-300 rounded-[10px] mt-[10px]">
                Enter
              </button>
            </form>
          </div>
        </Modal>
        <div className="flex items-start mb-[24px] gap-[24px]">
          <div className="flex flex-col items-start">
            <div className="flex gap-[24px] mb-[24px] items-center">
              <div className="w-[461px] bg-cardImg pt-[22px] pl-[31px] pr-[25px] pb-[36px] rounded-[15px]  h-[241px] relative">
                <div className="w-[404px] flex flex-col items-start h-[181px]  bg-transparent">
                  <div className="flex items-center justify-between mb-[67px]">
                    <h2 className="text-xl font-bold text-white">Purity UI</h2>
                    <div className="w-[49px]  h-[33px] flex flex-col items-center justify-center">
                      <img
                        src={Circle}
                        alt="img"
                        className="w-[49px] h-[33px] object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="w-[244px] mb-[13px] h-[33px]">
                      <p className="text-xl font-bold text-white">
                        7812 2139 0823 XXXX
                      </p>
                    </div>
                    <div className="flex items-center gap-[33px]">
                      <div className="flex flex-col items-start">
                        <p className="text-white font-normal text-sm">
                          VALID THRU
                        </p>
                        <p className="text-sm font-bold text-white">05/24</p>
                      </div>
                      <div className="flex flex-col items-start">
                        <p className="text-white font-medium text-sm">CVV</p>
                        <p className="text-sm font-bold text-white">09X</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[240px] rounded-[15px] bg-white h-[240px]">
                <div className="pt-[30px] flex flex-col items-center justify-center mb-[22px] px-[88px]">
                  <SellingIcon />
                </div>
                <h2 className="text-xl font-bold text-gray-700 text-center mb-[4px] pl-[59px] pr-[58.5px]">
                  Salary
                </h2>
                <p className="text-sm font-bold text-gray-400 mb-[13px] whitespace-nowrap text-center">
                  Belong Interactive
                </p>
                <div className="w-[172px] mx-[34px] mb-[13px] h-[1px] bg-gray-300"></div>
                <p className="text-xl font-bold text-gray-700 text-center">
                  +$2000
                </p>
              </div>
              <div className="w-[240px] rounded-[15px] bg-white h-[240px]">
                <div className="pt-[30px] flex flex-col items-center justify-center mb-[22px] px-[88px]">
                  <PayPal />
                </div>
                <h2 className="text-xl font-bold text-gray-700 text-center mb-[4px] pl-[59px] pr-[58.5px]">
                  Paypal
                </h2>
                <p className="text-sm font-bold text-gray-400 mb-[13px] whitespace-nowrap text-center">
                  Freelance Payment
                </p>
                <div className="w-[172px] mx-[34px] mb-[13px] h-[1px] bg-gray-300"></div>
                <p className="text-xl font-bold text-gray-700 text-center">
                  $455.00
                </p>
              </div>
            </div>
            <div className="w-[989px] pt-[24px] pl-[24px] pr-[24px] h-[172px]  rounded-[15px] bg-white">
              <div className="flex items-center mb-[24px] justify-between">
                <h2 className="text-sm font-bold text-gray-700">
                  Payment Method
                </h2>
                <button
                  onClick={open}
                  className="w-[134px] rounded-[12px] h-[35px] bg-gray-900 text-center text-white text-sm font-bold"
                >
                  ADD A NEW CARD
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="w-[458px] flex items-center justify-center px-[20px] py-[25px] h-[65px] border rounded-[15px]">
                  <div className="w-[21px] mr-[10px] flex flex-col items-center justify-center h-[13px]">
                    <MasterCard />
                  </div>
                  <div className="w-[386px] h-[19px]">
                    <input
                      type="text"
                      name="card-number"
                      placeholder="7812 2139 0823 XXXX"
                      className=" outline-none pl-[15px]"
                    />
                  </div>
                  <div className="w-[12px] h-[12px] flex items-center justify-center">
                    <Edit />
                  </div>
                </div>
                <div className="w-[458px] flex items-center justify-center px-[20px] py-[25px] h-[65px] border rounded-[15px]">
                  <div className="w-[21px] mr-[10px] flex flex-col items-center justify-center h-[13px]">
                    <Visa />
                  </div>
                  <div className="w-[386px] h-[19px]">
                    <input
                      type="text"
                      name="card-number"
                      placeholder="7812 2139 0823 XXXX"
                      className=" outline-none pl-[15px]"
                    />
                  </div>
                  <div className="w-[12px] h-[12px] flex items-center justify-center">
                    <Edit />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[156px] pt-[28px] px-[10px]  h-[436px]  bg-white rounded-[15px]">
            <h2 className="text-xl font-bold text-gray-700 text-center">
              Invoices
            </h2>
            <div className="flex flex-col items-center justify-center mb-[24px]">
              <h2 className="text-sm font-bold text-gray-700 whitespace-nowrap">
                March, 01, 2020
              </h2>
              <p className="text-sm font-bold text-gray-400 whitespace-nowrap">
                #MS-415646
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mb-[24px]">
              <h2 className="text-sm font-bold text-gray-700 whitespace-nowrap">
                March, 01, 2020
              </h2>
              <p className="text-sm font-bold text-gray-400 whitespace-nowrap">
                #MS-415646
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mb-[24px]">
              <h2 className="text-sm font-bold text-gray-700 whitespace-nowrap">
                March, 01, 2020
              </h2>
              <p className="text-sm font-bold text-gray-400 whitespace-nowrap">
                #MS-415646
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mb-[24px]">
              <h2 className="text-sm font-bold text-gray-700 whitespace-nowrap">
                March, 01, 2020
              </h2>
              <p className="text-sm font-bold text-gray-400 whitespace-nowrap">
                #MS-415646
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mb-[24px]">
              <h2 className="text-sm font-bold text-gray-700 whitespace-nowrap">
                March, 01, 2020
              </h2>
              <p className="text-sm font-bold text-gray-400 whitespace-nowrap">
                #MS-415646
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mb-[24px]">
              <h2 className="text-sm font-bold text-gray-700 whitespace-nowrap">
                March, 01, 2020
              </h2>
              <p className="text-sm font-bold text-gray-400 whitespace-nowrap">
                #MS-415646
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[24px]">
          <div className="w-[900px] h-[538px] pt-[28px] pl-[21px] pr-[22px] border-2 rounded-[15px] bg-white">
            <h2 className="text-xl font-bold text-gray-700 mb-[17px]">
              Billing Information
            </h2>
            <div className="flex h-[400px] overflow-scroll gap-[20px]  flex-col items-center">
              {data?.length > 0 ? (
                <>
                  <div className="flex flex-col items-center gap-[20px]">
                    {data?.map((item) => (
                      <BillingCard key={item.id} {...item} />
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <div className="w-[800px] mb-[10px] flex flex-col items-center  pt-[10px] pl-[18px]  pr-[22px] rounded-[15px] bg-white">
                      <h2 className="text-xl font-bold text-gray-700 text-center mb-[64px]">
                        You don`t have any billing
                      </h2>
                      <div className="w-[313px] h-[235px] mb-[10px]">
                        <img
                          src={bgImg}
                          alt="img"
                          className=" w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div>
              <Link to="/app/billing/create">
                <button className="w-[223px] h-[43px] mt-[5px] bg-teal-400 text-center rounded-[6px] text-sm font-bold text-white">
                  Create Billing
                </button>
              </Link>
            </div>
          </div>
          <div className="w-[674px] h-[538px] border-2 pt-[28px] pl-[21px] pr-[22px] pb-[29px] bg-white rounded-[15px]">
            <h2 className="text-xl font-bold text-gray-700">
              Your Transactions
            </h2>
            <div className="flex flex-col items-center">
              {data?.map((item) => (
                <TransitionCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
