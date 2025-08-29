import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Shield,
  Phone,
  AlertTriangle,
  FileText,
  Users,
  Lock,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFax } from "@fortawesome/free-solid-svg-icons";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-12 w-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            Your privacy and the protection of your health information is our
            top priority
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* HIPAA Notice Card */}
        <Card className="mb-8 border-blue-200 shadow-lg">
          <CardHeader className="bg-blue-50">
            <div className="flex items-center space-x-3">
              <FileText className="h-6 w-6 text-blue-600" />
              <CardTitle className="text-2xl text-blue-900">
                HIPAA NOTICE OF PRIVACY PRACTICES
              </CardTitle>
            </div>
            <Badge
              variant="outline"
              className="w-fit mt-2 border-blue-300 text-blue-700"
            >
              Health Insurance Portability and Accountability Act of 1996
            </Badge>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-700 leading-relaxed">
              If you are a client of All Nurses Home Health, this notice
              describes how your medical information may be used and disclosed
              and how you can get access to this information. Please review the
              notice carefully.
            </p>
          </CardContent>
        </Card>

        {/* Uses and Disclosures Section */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-xl text-gray-800">
              <Users className="h-5 w-5 mr-2 text-green-600" />
              I. USES AND DISCLOSURES
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-700 font-medium">
              The agency will not disclose your health information without your
              authorization, except as described in this notice.
            </p>

            <div className="grid gap-6">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-semibold text-green-800 mb-2">
                  Plan of Care/Treatment
                </h3>
                <p className="text-gray-700 text-sm">
                  The agency will use your health information for the plan of
                  care/treatment. Information obtained by nurses, therapists and
                  other healthcare professionals will be shared to coordinate
                  your care.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-800 mb-2">Payment</h3>
                <p className="text-gray-700 text-sm">
                  The agency will use your health information for payment of
                  services. We may need to provide information to your health
                  insurer for reimbursement and prior approval purposes.
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-semibold text-purple-800 mb-2">
                  Health Care Operations
                </h3>
                <p className="text-gray-700 text-sm">
                  The agency will use your health information for healthcare
                  operations to assess care quality and improve our services.
                  Regulatory organizations may review records for compliance.
                </p>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">
                Additional Authorized Uses:
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium">Emergency Notification:</span>{" "}
                    To notify family members or representatives of your
                    condition and location.
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium">Worker's Compensation:</span>{" "}
                    As required by worker's compensation laws.
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium">Public Health:</span> To
                    public health authorities for disease prevention and
                    control.
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium">Law Enforcement:</span> For
                    abuse/neglect reporting and threat situations.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800">
                    Duty to Warn
                  </h4>
                  <p className="text-yellow-700 text-sm mt-1">
                    When a client communicates a serious threat of physical
                    violence, we will notify the threatened person(s) and/or law
                    enforcement.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Individual Rights Section */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-xl text-gray-800">
              <Lock className="h-5 w-5 mr-2 text-blue-600" />
              II. INDIVIDUAL RIGHTS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">
              You have the following rights with respect to your protected
              health information:
            </p>

            <div className="space-y-4">
              {[
                {
                  number: "1",
                  title: "Request Restrictions",
                  content:
                    "You may request in writing that the agency not use or disclose your information for treatment, payment or administration purposes, except when authorized by you or required by law.",
                },
                {
                  number: "2",
                  title: "Access and Copy Records",
                  content:
                    "Within statutory limits, you have the right to inspect and copy your protected health information.",
                },
                {
                  number: "3",
                  title: "Request Amendments",
                  content:
                    "If you believe information in your record is incorrect or incomplete, you have the right to request amendments to your protected health information.",
                },
                {
                  number: "4",
                  title: "Accounting of Disclosures",
                  content:
                    "You have the right to receive an accounting of disclosures made by the agency for certain reasons. The first accounting in any 12-month period is provided without charge.",
                },
                {
                  number: "5",
                  title: "Paper Copy",
                  content:
                    "If this notice is sent electronically, you may obtain a paper copy upon request to the agency.",
                },
              ].map((right) => (
                <div
                  key={right.number}
                  className="flex space-x-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {right.number}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      {right.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{right.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Complaints Section */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">
              III. COMPLAINTS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              If you are concerned that the agency has violated your privacy
              rights or you disagree with a decision about access to your
              records, you may contact us or file a complaint with the Federal
              Department of Health and Human Services.
            </p>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <p className="text-red-800 font-medium text-sm">
                Under no circumstances will you be retaliated against for filing
                a complaint.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="shadow-lg border-blue-200">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-xl text-blue-900">
              IV. CONTACT INFORMATION
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-700 mb-6">
              If you have any questions or complaints, please contact our
              Privacy Officer:
            </p>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg text-gray-800 mb-4">
                All Nurses Home Health Privacy Officer
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Phone: (800) 553-2892</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon
                    icon={faFax}
                    className="h-5 w-5 text-blue-600"
                  />
                  <span className="text-gray-700">Fax: (844) 788-6070</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            This notice is effective as of the date of your enrollment with All
            Nurses Home Health.
          </p>
        </div>
      </div>
    </div>
  );
}
