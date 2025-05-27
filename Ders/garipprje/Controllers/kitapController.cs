using Microsoft.AspNetCore.Mvc;
public class BookController: Controller
{
public IActionResult Kategoriler()
{
    var kitap = new KitapModel{
      kitapId = 1,
      kitapAd = "Siyah",
      sayfaSayisi = 369, 
      Yazar = "NigraBey",
      
    };
    //viewbag ile veri gönderme
    ViewBag.Book=kitap;
    return View();
}

public IActionResult Kitaplistesi()
{
    return View();
}
}