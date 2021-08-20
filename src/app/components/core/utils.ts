export class Utils {
    public static showMessage(message: {type: string, text: string}) : any {
        
        this.buildClasses(message.type);
        setTimeout(() => {
          return undefined;
        }, 3000);
      }
    
      public static buildClasses(type: string) : any {
        return {
          'alert' : true
        }
        
      }
}