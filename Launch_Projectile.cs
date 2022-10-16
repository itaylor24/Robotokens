using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;

public class Launch_Projectile : MonoBehaviour
{
    // Start is called before the first frame update
    //GameObject prefab;
    public GameObject projectile_prefab;
    //public float launchVelocity = 700f;
    private float gravity = -9.8F;
    void Start()
    {
        //prefab = this.gameObject;
        Physics.gravity = new Vector3(0F, gravity, 0F);

        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void shoot(Vector3 pos, Quaternion rot, float dist){  
        GameObject projectile = Instantiate(projectile_prefab, transform.position, transform.rotation);
        projectile.transform.position = pos + new Vector3(-1.22f, 4.75f, 0.23f);
        Debug.Log(projectile.transform.rotation);
        projectile.GetComponent<Rigidbody>().rotation = rot;
        //Debug.Log(projectile.transform.eulerAngles);
        float h = 0.0f;//1.0f*projectile.transform.position.y;
        projectile.GetComponent<Rigidbody>().MoveRotation(Quaternion.Euler(projectile.GetComponent<Rigidbody>().rotation.eulerAngles + new Vector3(30,0,0)));
        //Debug.Log(projectile.transform.eulerAngles);
        //float x_velocity = launchVelocity*(float)Math.Cos(Math.PI/6.0);
        //float y_velocity = launchVelocity*(float)Math.Sin(Math.PI/6.0);
        float launchVelocity =   SolveBallisticEquation(dist, h, -1.0f*gravity, 30.0f);//(float)Math.Sqrt(3.0*Math.Pow((h+(dist/Math.Sqrt(3.0)))/(gravity*dist), -1));
        Debug.Log("Velocity: " + launchVelocity.ToString());
        projectile.GetComponent<Rigidbody>().AddRelativeForce(new Vector3(0 , launchVelocity, 0), ForceMode.VelocityChange);
        projectile.GetComponent<Explode_Grenade>().live = true;
    }

    float SolveBallisticEquation(float distanceX,float distanceY,float gravity,float angle)
    {
         distanceX = Mathf.Abs(distanceX);
         float TotalSpeed;
         Vector2 Solution;
         TotalSpeed = (1/ Mathf.Cos(angle * Mathf.Deg2Rad))*Mathf.Sqrt(0.5F*distanceX*distanceX* gravity /(distanceY + Mathf.Tan(angle * Mathf.Deg2Rad) * distanceX));
         Solution.x = TotalSpeed * Mathf.Cos(angle * Mathf.Deg2Rad);
         Solution.y = TotalSpeed * Mathf.Sin(angle * Mathf.Deg2Rad);
         print(Solution);

         return (float)Math.Sqrt(Math.Pow(Solution.x, 2) + Math.Pow(Solution.y, 2));
     }
}
