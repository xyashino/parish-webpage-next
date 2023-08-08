import { apiCall, apiCallWithToast } from "@/lib/utils";
import { ApiRoute } from "@/types/enums/api-route.enum";
import { RevalidateTag } from "@/types/enums/revalidate-tag.enum";
import { DEFAULT_API_TOAST_CRUD_MESSAGES } from "@/lib/constants/common";
import { ApiToastsCrudMessages, ToastMessages } from "@/types/toast";

export class BaseCrudApiCall<T> {
  constructor(
    private url: ApiRoute,
    private revalidateTag: RevalidateTag[],
    private useToast = true,
    private msg: ApiToastsCrudMessages = DEFAULT_API_TOAST_CRUD_MESSAGES
  ) {}

  private apiCall(
    method: ApiMethod,
    id: string | null,
    body: object | null,
    msg?: ToastMessages
  ): Promise<T> {
    const fetchOptions = {
      method: method,
      ...(body && { body: JSON.stringify(body) }),
      next: { tags: this.revalidateTag },
    };

    const url = `${this.url}${id ? `/${id}` : ""}`;

    if (!this.useToast) return apiCall<T>(url, fetchOptions);

    return apiCallWithToast<T>({
      url,
      fetchOptions,
      msg,
    });
  }

  public create(body: object) {
    return this.apiCall("POST", null, body, this.msg.create);
  }

  public update(id: string, body: object) {
    return this.apiCall("PUT", id, body, this.msg.update);
  }

  public delete(id: string) {
    return this.apiCall("DELETE", id, null, this.msg.delete);
  }

  public get(id: string) {
    return this.apiCall("GET", id, null);
  }

  public getAll() {
    return this.apiCall("GET", null, null);
  }
}