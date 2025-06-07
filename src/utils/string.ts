/**
 * 문자열 처리 utils
 */

/**
 * 파라미터 객체를 query string으로 변환
 * @param obj   parameter
 * @return query string
 */
export function convertToQueryString(obj: any): string {
    let result = "";
    const keys = Object.keys(obj);

    for (const k of keys) {
        const val = obj[k] as string;
        const str = (result == "" ? "?" : "&") + `${k}=${val}`;

        result += str;
    }

    return result;
}
