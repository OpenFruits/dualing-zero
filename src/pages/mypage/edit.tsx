import React, { useEffect, useContext, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import Select from "react-select";
import {
  useForm,
  SubmitHandler,
  Controller,
  FieldError,
} from "react-hook-form";
import { Button } from "src/component/Button";
import { Input } from "src/component/Input";
import { advantageOptions } from "src/constants/options/advantage";
import { importantOptions } from "src/constants/options/important";
import { industryOptions } from "src/constants/options/industry";
import { locationOptions } from "src/constants/options/location";
import { occupationOptions } from "src/constants/options/occupation";
import { EditForms as Inputs } from "src/constants/types";
import { Header } from "src/component/Header";
import { studentList } from "src/data/studentList";

const Edit: NextPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Inputs>();

  const [loading, setLoading] = useState(false);

  const update: SubmitHandler<Inputs> = async (data) => {
    // setLoading(true);
    // const uid = currentUser.uid;
    // const timestamp = FirebaseTimestamp;
    // const userUpdateData = {
    // updated_at: timestamp,
    // firstName: data.firstName,
    // firstKana: data.firstKana,
    // lastName: data.lastName,
    // lastKana: data.lastKana,
    // university: data.university,
    // department: data.department,
    // club: data.club,
    // important: filterValue(data.important),
    // importantForSearch: arrayForSearch(data.important),
    // industries: filterValue(data.industries),
    // industriesForSearch: arrayForSearch(data.industries),
    // occupations: filterValue(data.occupations),
    // occupationsForSearch: arrayForSearch(data.occupations),
    // locations: filterValue(data.locations),
    // locationsForSearch: arrayForSearch(data.locations),
    // advantages: filterValue(data.advantages),
    // advantagesForSearch: arrayForSearch(data.advantages),
    // comment: data.comment,
    // };
    // const ref = doc(db, "users", uid);
    // await updateDoc(ref, userUpdateData).then(() => {
    //   setCurrentUser({
    //     ...currentUser,
    //     firstName: data.firstName,
    //     firstKana: data.firstKana,
    //     lastName: data.lastName,
    //     lastKana: data.lastKana,
    //     university: data.university,
    //     department: data.department,
    //     club: data.club,
    //     important: filterValue(data.important),
    //     industries: filterValue(data.industries),
    //     occupations: filterValue(data.occupations),
    //     locations: filterValue(data.locations),
    //     advantages: filterValue(data.advantages),
    //     comment: data.comment,
    //   });
    //   router.push(`/${uid}`).then(() => setLoading(false));
    //     toast.success("???????????????????????????????????????");
    //   });
  };

  const importantError = errors.important as unknown as FieldError;
  const industriesError = errors.industries as unknown as FieldError;
  const occupationsError = errors.occupations as unknown as FieldError;
  const locationsError = errors.locations as unknown as FieldError;
  const advantagesError = errors.advantages as unknown as FieldError;

  // useEffect(() => {
  //   register("important");
  // }, [register]);

  return (
    <>
      <Header pageTitle="????????????????????????" href={`/mypage`} />
      <div className="m-auto sm:w-2/3">
        <div className="flex justify-between pt-4 pr-4">
          <h1 className="p-2 font-bold text-lg">????????????????????????</h1>
          <Button
            className="w-[100px] h-10 rounded shadow-md"
            onClick={() => router.push(`/mypage`)}
          >
            ??????
          </Button>
        </div>
        <form className="p-2" onSubmit={handleSubmit(update)}>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-bold bg-gray-200 p-3">??????</p>
              <div className="border border-gray-200 bg-white">
                <div className="flex justify-center sm:justify-start sm: mx-4">
                  <input
                    placeholder="???"
                    defaultValue={studentList[0].firstName}
                    className="bg-white rounded border border-gray-300 p-1 mx-1 mt-2 w-40 h-10"
                    {...register("firstName", { required: "?????????????????????" })}
                  />
                  <input
                    placeholder="???"
                    defaultValue={studentList[0].lastName}
                    className="bg-white rounded border border-gray-300 p-1 mx-1 mt-2 w-40 h-10"
                    {...register("lastName", { required: "?????????????????????" })}
                  />
                </div>
                <p className="text-red-500 ml-4 mb-2 text-sm">
                  {errors.firstName?.message ??
                    errors.lastName?.message ??
                    null}
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold bg-gray-200 p-3">??????????????????</p>
              <div className="border border-gray-200 bg-white">
                <div className="flex justify-center sm:justify-start sm: mx-4">
                  <input
                    placeholder="???????????????"
                    defaultValue={studentList[0].firstKana}
                    className="bg-white rounded border border-gray-300 p-1 mx-1 mt-2 w-40 h-10"
                    {...register("firstKana", {
                      required: "?????????????????????????????????",
                    })}
                  />
                  <input
                    placeholder="???????????????"
                    defaultValue={studentList[0].lastKana}
                    className="bg-white rounded border border-gray-300 p-1 mx-1 mt-2 w-40 h-10"
                    {...register("lastKana", {
                      required: "?????????????????????????????????",
                    })}
                  />
                </div>
                <p className="text-red-500 ml-4 mb-2 text-sm">
                  {errors.firstKana?.message ??
                    errors.lastKana?.message ??
                    null}
                </p>
              </div>
            </div>
            <Input
              label="?????????"
              placeholder="????????????"
              defaultValue={studentList[0].university}
              {...register("university", {
                required: "????????????????????????",
              })}
              error={errors.university?.message}
            />
            <Input
              label="??????"
              placeholder="????????????"
              defaultValue={studentList[0].department}
              {...register("department", {
                required: "?????????????????????",
              })}
              error={errors.department?.message}
            />
            <Input
              label="?????????????????????"
              placeholder="?????????"
              defaultValue={studentList[0].club}
              {...register("club", {
                required: "????????????????????????????????????",
              })}
              error={errors.club?.message}
            />
            <div>
              <p className="text-sm font-bold bg-gray-200 p-3">??????????????????</p>
              <div className="border border-gray-200 bg-white px-4 py-2">
                <Controller
                  name="important"
                  defaultValue={studentList[0].important.map(
                    (label: string) => ({
                      label: label,
                      value: label,
                    })
                  )}
                  rules={{
                    required: "????????????????????????????????????",
                    validate: (value) =>
                      value.length <= 3 || "??????????????????????????????",
                  }}
                  control={control}
                  render={({ field }) => (
                    <Select
                      id="important"
                      instanceId={"important"}
                      inputId={"important"}
                      {...field}
                      placeholder="??????????????????"
                      isMulti
                      options={importantOptions}
                    />
                  )}
                />
                <p className="text-red-500 text-sm">
                  {importantError?.message}
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold bg-gray-200 p-3">
                ?????????????????????
              </p>
              <div className="border border-gray-200 bg-white px-4 py-2">
                <Controller
                  name="industries"
                  defaultValue={studentList[0].industries.map(
                    (label: string) => ({
                      label: label,
                      value: label,
                    })
                  )}
                  rules={{
                    required: "????????????????????????????????????",
                    validate: (value) =>
                      value.length <= 3 || "??????????????????????????????",
                  }}
                  control={control}
                  render={({ field }) => (
                    <Select
                      id="industries"
                      instanceId={"industries"}
                      inputId={"industries"}
                      {...field}
                      placeholder="??????????????????"
                      isMulti
                      options={industryOptions}
                    />
                  )}
                />
                <p className="text-red-500 text-sm">
                  {industriesError?.message}
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold bg-gray-200 p-3">
                ?????????????????????
              </p>
              <div className="border border-gray-200 bg-white px-4 py-2">
                <Controller
                  name="occupations"
                  defaultValue={studentList[0].occupations.map(
                    (label: string) => ({
                      label: label,
                      value: label,
                    })
                  )}
                  rules={{
                    required: "????????????????????????????????????",
                    validate: (value) =>
                      value.length <= 3 || "??????????????????????????????",
                  }}
                  control={control}
                  render={({ field }) => (
                    <Select
                      id="occupations"
                      instanceId={"occupations"}
                      inputId={"occupations"}
                      {...field}
                      placeholder="??????????????????"
                      isMulti
                      options={occupationOptions}
                    />
                  )}
                />
                <p className="text-red-500 text-sm">
                  {occupationsError?.message}
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold bg-gray-200 p-3">???????????????</p>
              <div className="border border-gray-200 bg-white px-4 py-2">
                <Controller
                  name="locations"
                  defaultValue={studentList[0].locations?.map(
                    (label: string) => ({
                      label: label,
                      value: label,
                    })
                  )}
                  rules={{
                    required: "????????????????????????????????????",
                    validate: (value) =>
                      value.length <= 3 || "??????????????????????????????",
                  }}
                  control={control}
                  render={({ field }) => (
                    <Select
                      id="locations"
                      instanceId={"locations"}
                      inputId={"locations"}
                      {...field}
                      placeholder="??????????????????"
                      isMulti
                      options={locationOptions}
                    />
                  )}
                />
                <p className="text-red-500 text-sm">
                  {locationsError?.message}
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold bg-gray-200 p-3">??????</p>
              <div className="border border-gray-200 bg-white px-4 py-2">
                <Controller
                  name="advantages"
                  defaultValue={studentList[0].advantages.map(
                    (label: string) => ({
                      label: label,
                      value: label,
                    })
                  )}
                  rules={{
                    required: "????????????????????????????????????",
                    validate: (value) =>
                      value.length <= 3 || "??????????????????????????????",
                  }}
                  control={control}
                  render={({ field }) => (
                    <Select
                      id="advantages"
                      instanceId={"advantages"}
                      inputId={"advantages"}
                      {...field}
                      placeholder="??????????????????"
                      isMulti
                      options={advantageOptions}
                    />
                  )}
                />
                <p className="text-red-500 text-sm">
                  {advantagesError?.message}
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold bg-gray-200 p-3">
                ????????????????????????????????????
              </p>
              <div className="border border-gray-200 bg-white px-4 py-2">
                <textarea
                  {...register("comment")}
                  defaultValue={studentList[0].comment}
                  placeholder="(???)?????????????????????????????????????????????????????????????????????????????????????????????"
                  className="resize-none h-14 w-full border border-gray-300 p-1 rounded leading-none"
                />
              </div>
            </div>
          </div>
          <br />
          <Button
            className="w-full mb-4 shadow-md"
            disabled={loading}
            onClick={handleSubmit(update)}
          >
            {loading ? "?????????" : "???????????????????????????????????????"}
          </Button>
        </form>
      </div>
    </>
  );
};

export default Edit;
